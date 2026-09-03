# `dataAwsccBedrockIntelligentPromptRouter` Submodule <a name="`dataAwsccBedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockIntelligentPromptRouter <a name="DataAwsccBedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter(scope: Construct, id: string, config: DataAwsccBedrockIntelligentPromptRouterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig">DataAwsccBedrockIntelligentPromptRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig">DataAwsccBedrockIntelligentPromptRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockIntelligentPromptRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fallbackModel">fallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference">DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList">DataAwsccBedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterArn">promptRouterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterName">promptRouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.routingCriteria">routingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference">DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList">DataAwsccBedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fallbackModel`<sup>Required</sup> <a name="fallbackModel" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fallbackModel"></a>

```typescript
public readonly fallbackModel: DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference">DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.models"></a>

```typescript
public readonly models: DataAwsccBedrockIntelligentPromptRouterModelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList">DataAwsccBedrockIntelligentPromptRouterModelsList</a>

---

##### `promptRouterArn`<sup>Required</sup> <a name="promptRouterArn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```typescript
public readonly promptRouterArn: string;
```

- *Type:* string

---

##### `promptRouterName`<sup>Required</sup> <a name="promptRouterName" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterName"></a>

```typescript
public readonly promptRouterName: string;
```

- *Type:* string

---

##### `routingCriteria`<sup>Required</sup> <a name="routingCriteria" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.routingCriteria"></a>

```typescript
public readonly routingCriteria: DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference">DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockIntelligentPromptRouterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList">DataAwsccBedrockIntelligentPromptRouterTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockIntelligentPromptRouterConfig <a name="DataAwsccBedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const dataAwsccBedrockIntelligentPromptRouterConfig: dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrock_intelligent_prompt_router#id DataAwsccBedrockIntelligentPromptRouter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockIntelligentPromptRouterFallbackModel <a name="DataAwsccBedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const dataAwsccBedrockIntelligentPromptRouterFallbackModel: dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel = { ... }
```


### DataAwsccBedrockIntelligentPromptRouterModels <a name="DataAwsccBedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const dataAwsccBedrockIntelligentPromptRouterModels: dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels = { ... }
```


### DataAwsccBedrockIntelligentPromptRouterRoutingCriteria <a name="DataAwsccBedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const dataAwsccBedrockIntelligentPromptRouterRoutingCriteria: dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria = { ... }
```


### DataAwsccBedrockIntelligentPromptRouterTags <a name="DataAwsccBedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

const dataAwsccBedrockIntelligentPromptRouterTags: dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel">DataAwsccBedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockIntelligentPromptRouterFallbackModel;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel">DataAwsccBedrockIntelligentPromptRouterFallbackModel</a>

---


### DataAwsccBedrockIntelligentPromptRouterModelsList <a name="DataAwsccBedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockIntelligentPromptRouterModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockIntelligentPromptRouterModelsOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels">DataAwsccBedrockIntelligentPromptRouterModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockIntelligentPromptRouterModels;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels">DataAwsccBedrockIntelligentPromptRouterModels</a>

---


### DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">responseQualityDifference</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria">DataAwsccBedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseQualityDifference`<sup>Required</sup> <a name="responseQualityDifference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```typescript
public readonly responseQualityDifference: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockIntelligentPromptRouterRoutingCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria">DataAwsccBedrockIntelligentPromptRouterRoutingCriteria</a>

---


### DataAwsccBedrockIntelligentPromptRouterTagsList <a name="DataAwsccBedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockIntelligentPromptRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockIntelligentPromptRouterTagsOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockIntelligentPromptRouter } from '@cdktn/provider-awscc'

new dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags">DataAwsccBedrockIntelligentPromptRouterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockIntelligentPromptRouterTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags">DataAwsccBedrockIntelligentPromptRouterTags</a>

---



