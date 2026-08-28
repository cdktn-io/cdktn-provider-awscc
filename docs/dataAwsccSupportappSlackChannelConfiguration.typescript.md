# `dataAwsccSupportappSlackChannelConfiguration` Submodule <a name="`dataAwsccSupportappSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSupportappSlackChannelConfiguration <a name="DataAwsccSupportappSlackChannelConfiguration" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer"></a>

```typescript
import { dataAwsccSupportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration(scope: Construct, id: string, config: DataAwsccSupportappSlackChannelConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig">DataAwsccSupportappSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig">DataAwsccSupportappSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isConstruct"></a>

```typescript
import { dataAwsccSupportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccSupportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccSupportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccSupportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSupportappSlackChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSupportappSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportapp_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSupportappSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelRoleArn">channelRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase">notifyOnAddCorrespondenceToCase</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCaseSeverity">notifyOnCaseSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase">notifyOnCreateOrReopenCase</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnResolveCase">notifyOnResolveCase</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `channelRoleArn`<sup>Required</sup> <a name="channelRoleArn" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelRoleArn"></a>

```typescript
public readonly channelRoleArn: string;
```

- *Type:* string

---

##### `notifyOnAddCorrespondenceToCase`<sup>Required</sup> <a name="notifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase"></a>

```typescript
public readonly notifyOnAddCorrespondenceToCase: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `notifyOnCaseSeverity`<sup>Required</sup> <a name="notifyOnCaseSeverity" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCaseSeverity"></a>

```typescript
public readonly notifyOnCaseSeverity: string;
```

- *Type:* string

---

##### `notifyOnCreateOrReopenCase`<sup>Required</sup> <a name="notifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase"></a>

```typescript
public readonly notifyOnCreateOrReopenCase: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `notifyOnResolveCase`<sup>Required</sup> <a name="notifyOnResolveCase" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnResolveCase"></a>

```typescript
public readonly notifyOnResolveCase: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSupportappSlackChannelConfigurationConfig <a name="DataAwsccSupportappSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccSupportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSupportappSlackChannelConfigurationConfig: dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportapp_slack_channel_configuration#id DataAwsccSupportappSlackChannelConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



