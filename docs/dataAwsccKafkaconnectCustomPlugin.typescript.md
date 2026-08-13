# `dataAwsccKafkaconnectCustomPlugin` Submodule <a name="`dataAwsccKafkaconnectCustomPlugin` Submodule" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKafkaconnectCustomPlugin <a name="DataAwsccKafkaconnectCustomPlugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin(scope: Construct, id: string, config: DataAwsccKafkaconnectCustomPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig">DataAwsccKafkaconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig">DataAwsccKafkaconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isConstruct"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformElement"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformDataSource"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccKafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKafkaconnectCustomPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKafkaconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKafkaconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.customPluginArn">customPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fileDescription">fileDescription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference">DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList">DataAwsccKafkaconnectCustomPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `customPluginArn`<sup>Required</sup> <a name="customPluginArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.customPluginArn"></a>

```typescript
public readonly customPluginArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fileDescription`<sup>Required</sup> <a name="fileDescription" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fileDescription"></a>

```typescript
public readonly fileDescription: DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference">DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.location"></a>

```typescript
public readonly location: DataAwsccKafkaconnectCustomPluginLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tags"></a>

```typescript
public readonly tags: DataAwsccKafkaconnectCustomPluginTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList">DataAwsccKafkaconnectCustomPluginTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKafkaconnectCustomPluginConfig <a name="DataAwsccKafkaconnectCustomPluginConfig" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectCustomPluginConfig: dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_custom_plugin#id DataAwsccKafkaconnectCustomPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKafkaconnectCustomPluginFileDescription <a name="DataAwsccKafkaconnectCustomPluginFileDescription" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectCustomPluginFileDescription: dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription = { ... }
```


### DataAwsccKafkaconnectCustomPluginLocation <a name="DataAwsccKafkaconnectCustomPluginLocation" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectCustomPluginLocation: dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation = { ... }
```


### DataAwsccKafkaconnectCustomPluginLocationS3Location <a name="DataAwsccKafkaconnectCustomPluginLocationS3Location" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectCustomPluginLocationS3Location: dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location = { ... }
```


### DataAwsccKafkaconnectCustomPluginTags <a name="DataAwsccKafkaconnectCustomPluginTags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectCustomPluginTags: dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference <a name="DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5">fileMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize">fileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription">DataAwsccKafkaconnectCustomPluginFileDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileMd5`<sup>Required</sup> <a name="fileMd5" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5"></a>

```typescript
public readonly fileMd5: string;
```

- *Type:* string

---

##### `fileSize`<sup>Required</sup> <a name="fileSize" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize"></a>

```typescript
public readonly fileSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectCustomPluginFileDescription;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription">DataAwsccKafkaconnectCustomPluginFileDescription</a>

---


### DataAwsccKafkaconnectCustomPluginLocationOutputReference <a name="DataAwsccKafkaconnectCustomPluginLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation">DataAwsccKafkaconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectCustomPluginLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation">DataAwsccKafkaconnectCustomPluginLocation</a>

---


### DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference <a name="DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey">fileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion">objectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location">DataAwsccKafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey"></a>

```typescript
public readonly fileKey: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectCustomPluginLocationS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location">DataAwsccKafkaconnectCustomPluginLocationS3Location</a>

---


### DataAwsccKafkaconnectCustomPluginTagsList <a name="DataAwsccKafkaconnectCustomPluginTagsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.get"></a>

```typescript
public get(index: number): DataAwsccKafkaconnectCustomPluginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKafkaconnectCustomPluginTagsOutputReference <a name="DataAwsccKafkaconnectCustomPluginTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags">DataAwsccKafkaconnectCustomPluginTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectCustomPluginTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags">DataAwsccKafkaconnectCustomPluginTags</a>

---



