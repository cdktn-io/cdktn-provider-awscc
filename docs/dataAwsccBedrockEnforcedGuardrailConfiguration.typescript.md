# `dataAwsccBedrockEnforcedGuardrailConfiguration` Submodule <a name="`dataAwsccBedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockEnforcedGuardrailConfiguration <a name="DataAwsccBedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

new dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration(scope: Construct, id: string, config: DataAwsccBedrockEnforcedGuardrailConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig">DataAwsccBedrockEnforcedGuardrailConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig">DataAwsccBedrockEnforcedGuardrailConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockEnforcedGuardrailConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailArn">guardrailArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailId">guardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailVersion">guardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.modelEnforcement">modelEnforcement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">selectiveContentGuarding</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `guardrailArn`<sup>Required</sup> <a name="guardrailArn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```typescript
public readonly guardrailArn: string;
```

- *Type:* string

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```typescript
public readonly guardrailId: string;
```

- *Type:* string

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier"></a>

```typescript
public readonly guardrailIdentifier: string;
```

- *Type:* string

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```typescript
public readonly guardrailVersion: string;
```

- *Type:* string

---

##### `modelEnforcement`<sup>Required</sup> <a name="modelEnforcement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```typescript
public readonly modelEnforcement: DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `selectiveContentGuarding`<sup>Required</sup> <a name="selectiveContentGuarding" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```typescript
public readonly selectiveContentGuarding: DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurationConfig <a name="DataAwsccBedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

const dataAwsccBedrockEnforcedGuardrailConfigurationConfig: dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_enforced_guardrail_configuration#id DataAwsccBedrockEnforcedGuardrailConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement <a name="DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

const dataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement: dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement = { ... }
```


### DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

const dataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding: dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

new dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">excludedModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">includedModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedModels`<sup>Required</sup> <a name="excludedModels" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```typescript
public readonly excludedModels: string[];
```

- *Type:* string[]

---

##### `includedModels`<sup>Required</sup> <a name="includedModels" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```typescript
public readonly includedModels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---


### DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockEnforcedGuardrailConfiguration } from '@cdktn/provider-awscc'

new dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">messages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```typescript
public readonly messages: string;
```

- *Type:* string

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---



