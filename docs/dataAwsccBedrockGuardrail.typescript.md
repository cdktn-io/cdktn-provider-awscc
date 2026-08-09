# `dataAwsccBedrockGuardrail` Submodule <a name="`dataAwsccBedrockGuardrail` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockGuardrail <a name="DataAwsccBedrockGuardrail" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_guardrail awscc_bedrock_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail(scope: Construct, id: string, config: DataAwsccBedrockGuardrailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig">DataAwsccBedrockGuardrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig">DataAwsccBedrockGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isConstruct"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.automatedReasoningPolicyConfig">automatedReasoningPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedInputMessaging">blockedInputMessaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contentPolicyConfig">contentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.crossRegionConfig">crossRegionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference">DataAwsccBedrockGuardrailCrossRegionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.failureRecommendations">failureRecommendations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailArn">guardrailArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailId">guardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.statusReasons">statusReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList">DataAwsccBedrockGuardrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.topicPolicyConfig">topicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.wordPolicyConfig">wordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference">DataAwsccBedrockGuardrailWordPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `automatedReasoningPolicyConfig`<sup>Required</sup> <a name="automatedReasoningPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.automatedReasoningPolicyConfig"></a>

```typescript
public readonly automatedReasoningPolicyConfig: DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference</a>

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedInputMessaging"></a>

```typescript
public readonly blockedInputMessaging: string;
```

- *Type:* string

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedOutputsMessaging"></a>

```typescript
public readonly blockedOutputsMessaging: string;
```

- *Type:* string

---

##### `contentPolicyConfig`<sup>Required</sup> <a name="contentPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contentPolicyConfig"></a>

```typescript
public readonly contentPolicyConfig: DataAwsccBedrockGuardrailContentPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigOutputReference</a>

---

##### `contextualGroundingPolicyConfig`<sup>Required</sup> <a name="contextualGroundingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contextualGroundingPolicyConfig"></a>

```typescript
public readonly contextualGroundingPolicyConfig: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `crossRegionConfig`<sup>Required</sup> <a name="crossRegionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.crossRegionConfig"></a>

```typescript
public readonly crossRegionConfig: DataAwsccBedrockGuardrailCrossRegionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference">DataAwsccBedrockGuardrailCrossRegionConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `failureRecommendations`<sup>Required</sup> <a name="failureRecommendations" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.failureRecommendations"></a>

```typescript
public readonly failureRecommendations: string[];
```

- *Type:* string[]

---

##### `guardrailArn`<sup>Required</sup> <a name="guardrailArn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailArn"></a>

```typescript
public readonly guardrailArn: string;
```

- *Type:* string

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailId"></a>

```typescript
public readonly guardrailId: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sensitiveInformationPolicyConfig`<sup>Required</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.sensitiveInformationPolicyConfig"></a>

```typescript
public readonly sensitiveInformationPolicyConfig: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReasons`<sup>Required</sup> <a name="statusReasons" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.statusReasons"></a>

```typescript
public readonly statusReasons: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockGuardrailTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList">DataAwsccBedrockGuardrailTagsList</a>

---

##### `topicPolicyConfig`<sup>Required</sup> <a name="topicPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.topicPolicyConfig"></a>

```typescript
public readonly topicPolicyConfig: DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `wordPolicyConfig`<sup>Required</sup> <a name="wordPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.wordPolicyConfig"></a>

```typescript
public readonly wordPolicyConfig: DataAwsccBedrockGuardrailWordPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference">DataAwsccBedrockGuardrailWordPolicyConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig <a name="DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig = { ... }
```


### DataAwsccBedrockGuardrailConfig <a name="DataAwsccBedrockGuardrailConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_guardrail#id DataAwsccBedrockGuardrail#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockGuardrailContentPolicyConfig <a name="DataAwsccBedrockGuardrailContentPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailContentPolicyConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig = { ... }
```


### DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig <a name="DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig = { ... }
```


### DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig <a name="DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig = { ... }
```


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfig <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailContextualGroundingPolicyConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig = { ... }
```


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig = { ... }
```


### DataAwsccBedrockGuardrailCrossRegionConfig <a name="DataAwsccBedrockGuardrailCrossRegionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailCrossRegionConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig = { ... }
```


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailSensitiveInformationPolicyConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig = { ... }
```


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig = { ... }
```


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig = { ... }
```


### DataAwsccBedrockGuardrailTags <a name="DataAwsccBedrockGuardrailTags" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailTags: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags = { ... }
```


### DataAwsccBedrockGuardrailTopicPolicyConfig <a name="DataAwsccBedrockGuardrailTopicPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailTopicPolicyConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig = { ... }
```


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig = { ... }
```


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig = { ... }
```


### DataAwsccBedrockGuardrailWordPolicyConfig <a name="DataAwsccBedrockGuardrailWordPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailWordPolicyConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig = { ... }
```


### DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig <a name="DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig = { ... }
```


### DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig <a name="DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

const dataAwsccBedrockGuardrailWordPolicyConfigWordsConfig: dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThreshold">confidenceThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: number;
```

- *Type:* number

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig</a>

---


### DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference <a name="DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierName">tierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tierName`<sup>Required</sup> <a name="tierName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierName"></a>

```typescript
public readonly tierName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig</a>

---


### DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList <a name="DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputAction">inputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabled">inputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalities">inputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">inputStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputAction">outputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabled">outputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalities">outputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">outputStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputAction`<sup>Required</sup> <a name="inputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputAction"></a>

```typescript
public readonly inputAction: string;
```

- *Type:* string

---

##### `inputEnabled`<sup>Required</sup> <a name="inputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabled"></a>

```typescript
public readonly inputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `inputModalities`<sup>Required</sup> <a name="inputModalities" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalities"></a>

```typescript
public readonly inputModalities: string[];
```

- *Type:* string[]

---

##### `inputStrength`<sup>Required</sup> <a name="inputStrength" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```typescript
public readonly inputStrength: string;
```

- *Type:* string

---

##### `outputAction`<sup>Required</sup> <a name="outputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputAction"></a>

```typescript
public readonly outputAction: string;
```

- *Type:* string

---

##### `outputEnabled`<sup>Required</sup> <a name="outputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabled"></a>

```typescript
public readonly outputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `outputModalities`<sup>Required</sup> <a name="outputModalities" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalities"></a>

```typescript
public readonly outputModalities: string[];
```

- *Type:* string[]

---

##### `outputStrength`<sup>Required</sup> <a name="outputStrength" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```typescript
public readonly outputStrength: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig</a>

---


### DataAwsccBedrockGuardrailContentPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailContentPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfig">contentFiltersTierConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig">DataAwsccBedrockGuardrailContentPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentFiltersTierConfig`<sup>Required</sup> <a name="contentFiltersTierConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfig"></a>

```typescript
public readonly contentFiltersTierConfig: DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference</a>

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```typescript
public readonly filtersConfig: DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailContentPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig">DataAwsccBedrockGuardrailContentPolicyConfig</a>

---


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>

---


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```typescript
public readonly filtersConfig: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailContextualGroundingPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfig</a>

---


### DataAwsccBedrockGuardrailCrossRegionConfigOutputReference <a name="DataAwsccBedrockGuardrailCrossRegionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArn">guardrailProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig">DataAwsccBedrockGuardrailCrossRegionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guardrailProfileArn`<sup>Required</sup> <a name="guardrailProfileArn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArn"></a>

```typescript
public readonly guardrailProfileArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailCrossRegionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig">DataAwsccBedrockGuardrailCrossRegionConfig</a>

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">piiEntitiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">regexesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `piiEntitiesConfig`<sup>Required</sup> <a name="piiEntitiesConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```typescript
public readonly piiEntitiesConfig: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `regexesConfig`<sup>Required</sup> <a name="regexesConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```typescript
public readonly regexesConfig: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig</a>

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction">inputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled">inputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction">outputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled">outputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputAction`<sup>Required</sup> <a name="inputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction"></a>

```typescript
public readonly inputAction: string;
```

- *Type:* string

---

##### `inputEnabled`<sup>Required</sup> <a name="inputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled"></a>

```typescript
public readonly inputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `outputAction`<sup>Required</sup> <a name="outputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction"></a>

```typescript
public readonly outputAction: string;
```

- *Type:* string

---

##### `outputEnabled`<sup>Required</sup> <a name="outputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled"></a>

```typescript
public readonly outputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction">inputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled">inputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction">outputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled">outputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inputAction`<sup>Required</sup> <a name="inputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction"></a>

```typescript
public readonly inputAction: string;
```

- *Type:* string

---

##### `inputEnabled`<sup>Required</sup> <a name="inputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled"></a>

```typescript
public readonly inputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputAction`<sup>Required</sup> <a name="outputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction"></a>

```typescript
public readonly outputAction: string;
```

- *Type:* string

---

##### `outputEnabled`<sup>Required</sup> <a name="outputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled"></a>

```typescript
public readonly outputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>

---


### DataAwsccBedrockGuardrailTagsList <a name="DataAwsccBedrockGuardrailTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailTagsOutputReference <a name="DataAwsccBedrockGuardrailTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags">DataAwsccBedrockGuardrailTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags">DataAwsccBedrockGuardrailTags</a>

---


### DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">topicsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfig">topicsTierConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig">DataAwsccBedrockGuardrailTopicPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicsConfig`<sup>Required</sup> <a name="topicsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```typescript
public readonly topicsConfig: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `topicsTierConfig`<sup>Required</sup> <a name="topicsTierConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfig"></a>

```typescript
public readonly topicsTierConfig: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailTopicPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig">DataAwsccBedrockGuardrailTopicPolicyConfig</a>

---


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">examples</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputAction">inputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabled">inputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputAction">outputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabled">outputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```typescript
public readonly examples: string[];
```

- *Type:* string[]

---

##### `inputAction`<sup>Required</sup> <a name="inputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputAction"></a>

```typescript
public readonly inputAction: string;
```

- *Type:* string

---

##### `inputEnabled`<sup>Required</sup> <a name="inputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabled"></a>

```typescript
public readonly inputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputAction`<sup>Required</sup> <a name="outputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputAction"></a>

```typescript
public readonly outputAction: string;
```

- *Type:* string

---

##### `outputEnabled`<sup>Required</sup> <a name="outputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabled"></a>

```typescript
public readonly outputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig</a>

---


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierName">tierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tierName`<sup>Required</sup> <a name="tierName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierName"></a>

```typescript
public readonly tierName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig</a>

---


### DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList <a name="DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction">inputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled">inputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction">outputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled">outputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputAction`<sup>Required</sup> <a name="inputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction"></a>

```typescript
public readonly inputAction: string;
```

- *Type:* string

---

##### `inputEnabled`<sup>Required</sup> <a name="inputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled"></a>

```typescript
public readonly inputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `outputAction`<sup>Required</sup> <a name="outputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction"></a>

```typescript
public readonly outputAction: string;
```

- *Type:* string

---

##### `outputEnabled`<sup>Required</sup> <a name="outputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled"></a>

```typescript
public readonly outputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>

---


### DataAwsccBedrockGuardrailWordPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailWordPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">managedWordListsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig">wordsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig">DataAwsccBedrockGuardrailWordPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedWordListsConfig`<sup>Required</sup> <a name="managedWordListsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```typescript
public readonly managedWordListsConfig: DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `wordsConfig`<sup>Required</sup> <a name="wordsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```typescript
public readonly wordsConfig: DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailWordPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig">DataAwsccBedrockGuardrailWordPolicyConfig</a>

---


### DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList <a name="DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference <a name="DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockGuardrail } from '@cdktn/provider-awscc'

new dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction">inputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled">inputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction">outputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled">outputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputAction`<sup>Required</sup> <a name="inputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction"></a>

```typescript
public readonly inputAction: string;
```

- *Type:* string

---

##### `inputEnabled`<sup>Required</sup> <a name="inputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled"></a>

```typescript
public readonly inputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `outputAction`<sup>Required</sup> <a name="outputAction" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction"></a>

```typescript
public readonly outputAction: string;
```

- *Type:* string

---

##### `outputEnabled`<sup>Required</sup> <a name="outputEnabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled"></a>

```typescript
public readonly outputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig</a>

---



