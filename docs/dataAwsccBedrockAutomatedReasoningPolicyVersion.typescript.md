# `dataAwsccBedrockAutomatedReasoningPolicyVersion` Submodule <a name="`dataAwsccBedrockAutomatedReasoningPolicyVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockAutomatedReasoningPolicyVersion <a name="DataAwsccBedrockAutomatedReasoningPolicyVersion" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_automated_reasoning_policy_version awscc_bedrock_automated_reasoning_policy_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion(scope: Construct, id: string, config: DataAwsccBedrockAutomatedReasoningPolicyVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig">DataAwsccBedrockAutomatedReasoningPolicyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig">DataAwsccBedrockAutomatedReasoningPolicyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isConstruct"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockAutomatedReasoningPolicyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockAutomatedReasoningPolicyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_automated_reasoning_policy_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockAutomatedReasoningPolicyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.definitionHash">definitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash">lastUpdatedDefinitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList">DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `definitionHash`<sup>Required</sup> <a name="definitionHash" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.definitionHash"></a>

```typescript
public readonly definitionHash: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastUpdatedDefinitionHash`<sup>Required</sup> <a name="lastUpdatedDefinitionHash" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash"></a>

```typescript
public readonly lastUpdatedDefinitionHash: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList">DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockAutomatedReasoningPolicyVersionConfig <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyVersionConfig: dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_automated_reasoning_policy_version#id DataAwsccBedrockAutomatedReasoningPolicyVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockAutomatedReasoningPolicyVersionTags <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionTags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

const dataAwsccBedrockAutomatedReasoningPolicyVersionTags: dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAutomatedReasoningPolicyVersion } from '@cdktn/provider-awscc'

new dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags">DataAwsccBedrockAutomatedReasoningPolicyVersionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAutomatedReasoningPolicyVersionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags">DataAwsccBedrockAutomatedReasoningPolicyVersionTags</a>

---



