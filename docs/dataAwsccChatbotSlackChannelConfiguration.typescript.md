# `dataAwsccChatbotSlackChannelConfiguration` Submodule <a name="`dataAwsccChatbotSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChatbotSlackChannelConfiguration <a name="DataAwsccChatbotSlackChannelConfiguration" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/chatbot_slack_channel_configuration awscc_chatbot_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.Initializer"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration(scope: Construct, id: string, config: DataAwsccChatbotSlackChannelConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig">DataAwsccChatbotSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig">DataAwsccChatbotSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isConstruct"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChatbotSlackChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChatbotSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChatbotSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.configurationName">configurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.customizationResourceArns">customizationResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.guardrailPolicies">guardrailPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.slackChannelId">slackChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.slackWorkspaceId">slackWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList">DataAwsccChatbotSlackChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.userRoleRequired">userRoleRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

---

##### `customizationResourceArns`<sup>Required</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.customizationResourceArns"></a>

```typescript
public readonly customizationResourceArns: string[];
```

- *Type:* string[]

---

##### `guardrailPolicies`<sup>Required</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.guardrailPolicies"></a>

```typescript
public readonly guardrailPolicies: string[];
```

- *Type:* string[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.slackChannelId"></a>

```typescript
public readonly slackChannelId: string;
```

- *Type:* string

---

##### `slackWorkspaceId`<sup>Required</sup> <a name="slackWorkspaceId" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.slackWorkspaceId"></a>

```typescript
public readonly slackWorkspaceId: string;
```

- *Type:* string

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccChatbotSlackChannelConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList">DataAwsccChatbotSlackChannelConfigurationTagsList</a>

---

##### `userRoleRequired`<sup>Required</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.userRoleRequired"></a>

```typescript
public readonly userRoleRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChatbotSlackChannelConfigurationConfig <a name="DataAwsccChatbotSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChatbotSlackChannelConfigurationConfig: dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/chatbot_slack_channel_configuration#id DataAwsccChatbotSlackChannelConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChatbotSlackChannelConfigurationTags <a name="DataAwsccChatbotSlackChannelConfigurationTags" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChatbotSlackChannelConfigurationTags: dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChatbotSlackChannelConfigurationTagsList <a name="DataAwsccChatbotSlackChannelConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccChatbotSlackChannelConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChatbotSlackChannelConfigurationTagsOutputReference <a name="DataAwsccChatbotSlackChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChatbotSlackChannelConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTags">DataAwsccChatbotSlackChannelConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChatbotSlackChannelConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotSlackChannelConfiguration.DataAwsccChatbotSlackChannelConfigurationTags">DataAwsccChatbotSlackChannelConfigurationTags</a>

---



