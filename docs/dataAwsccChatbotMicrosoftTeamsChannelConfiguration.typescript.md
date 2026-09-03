# `dataAwsccChatbotMicrosoftTeamsChannelConfiguration` Submodule <a name="`dataAwsccChatbotMicrosoftTeamsChannelConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChatbotMicrosoftTeamsChannelConfiguration <a name="DataAwsccChatbotMicrosoftTeamsChannelConfiguration" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chatbot_microsoft_teams_channel_configuration awscc_chatbot_microsoft_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration(scope: Construct, id: string, config: DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig">DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig">DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isConstruct"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChatbotMicrosoftTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChatbotMicrosoftTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chatbot_microsoft_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChatbotMicrosoftTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.configurationName">configurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns">customizationResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies">guardrailPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId">teamsChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName">teamsChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId">teamsTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired">userRoleRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

---

##### `customizationResourceArns`<sup>Required</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns"></a>

```typescript
public readonly customizationResourceArns: string[];
```

- *Type:* string[]

---

##### `guardrailPolicies`<sup>Required</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies"></a>

```typescript
public readonly guardrailPolicies: string[];
```

- *Type:* string[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList</a>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `teamsChannelId`<sup>Required</sup> <a name="teamsChannelId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId"></a>

```typescript
public readonly teamsChannelId: string;
```

- *Type:* string

---

##### `teamsChannelName`<sup>Required</sup> <a name="teamsChannelName" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName"></a>

```typescript
public readonly teamsChannelName: string;
```

- *Type:* string

---

##### `teamsTenantId`<sup>Required</sup> <a name="teamsTenantId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId"></a>

```typescript
public readonly teamsTenantId: string;
```

- *Type:* string

---

##### `userRoleRequired`<sup>Required</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired"></a>

```typescript
public readonly userRoleRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig: dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chatbot_microsoft_teams_channel_configuration#id DataAwsccChatbotMicrosoftTeamsChannelConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChatbotMicrosoftTeamsChannelConfigurationTags: dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags</a>

---



