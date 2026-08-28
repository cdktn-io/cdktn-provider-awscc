# `dataAwsccBedrockAutomatedReasoningPolicy` Submodule <a name="`dataAwsccBedrockAutomatedReasoningPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockAutomatedReasoningPolicy <a name="DataAwsccBedrockAutomatedReasoningPolicy" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy(scope: Construct, id: string, config: DataAwsccBedrockAutomatedReasoningPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig">DataAwsccBedrockAutomatedReasoningPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig">DataAwsccBedrockAutomatedReasoningPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockAutomatedReasoningPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockAutomatedReasoningPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockAutomatedReasoningPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.definitionHash">definitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forceDelete">forceDelete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyDefinition">policyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList">DataAwsccBedrockAutomatedReasoningPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `definitionHash`<sup>Required</sup> <a name="definitionHash" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.definitionHash"></a>

```typescript
public readonly definitionHash: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forceDelete"></a>

```typescript
public readonly forceDelete: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockAutomatedReasoningPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList">DataAwsccBedrockAutomatedReasoningPolicyTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockAutomatedReasoningPolicyConfig <a name="DataAwsccBedrockAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyConfig: dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy#id DataAwsccBedrockAutomatedReasoningPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition: dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition = { ... }
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules: dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules = { ... }
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes: dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes = { ... }
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues: dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues = { ... }
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables: dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables = { ... }
```


### DataAwsccBedrockAutomatedReasoningPolicyTags <a name="DataAwsccBedrockAutomatedReasoningPolicyTags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyTags: dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types">types</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types"></a>

```typescript
public readonly types: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables"></a>

```typescript
public readonly variables: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression">alternateExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateExpression`<sup>Required</sup> <a name="alternateExpression" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression"></a>

```typescript
public readonly alternateExpression: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values"></a>

```typescript
public readonly values: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyTagsList <a name="DataAwsccBedrockAutomatedReasoningPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicy } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags">DataAwsccBedrockAutomatedReasoningPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAutomatedReasoningPolicyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags">DataAwsccBedrockAutomatedReasoningPolicyTags</a>

---



