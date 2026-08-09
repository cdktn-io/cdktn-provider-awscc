# `dataAwsccIvsRecordingConfiguration` Submodule <a name="`dataAwsccIvsRecordingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIvsRecordingConfiguration <a name="DataAwsccIvsRecordingConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivs_recording_configuration awscc_ivs_recording_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration(scope: Construct, id: string, config: DataAwsccIvsRecordingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig">DataAwsccIvsRecordingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig">DataAwsccIvsRecordingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIvsRecordingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isConstruct"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIvsRecordingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIvsRecordingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIvsRecordingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivs_recording_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIvsRecordingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference">DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.recordingReconnectWindowSeconds">recordingReconnectWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.renditionConfiguration">renditionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference">DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList">DataAwsccIvsRecordingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.thumbnailConfiguration">thumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference">DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.destinationConfiguration"></a>

```typescript
public readonly destinationConfiguration: DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference">DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recordingReconnectWindowSeconds`<sup>Required</sup> <a name="recordingReconnectWindowSeconds" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.recordingReconnectWindowSeconds"></a>

```typescript
public readonly recordingReconnectWindowSeconds: number;
```

- *Type:* number

---

##### `renditionConfiguration`<sup>Required</sup> <a name="renditionConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.renditionConfiguration"></a>

```typescript
public readonly renditionConfiguration: DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference">DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccIvsRecordingConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList">DataAwsccIvsRecordingConfigurationTagsList</a>

---

##### `thumbnailConfiguration`<sup>Required</sup> <a name="thumbnailConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.thumbnailConfiguration"></a>

```typescript
public readonly thumbnailConfiguration: DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference">DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIvsRecordingConfigurationConfig <a name="DataAwsccIvsRecordingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIvsRecordingConfigurationConfig: dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivs_recording_configuration#id DataAwsccIvsRecordingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIvsRecordingConfigurationDestinationConfiguration <a name="DataAwsccIvsRecordingConfigurationDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfiguration.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIvsRecordingConfigurationDestinationConfiguration: dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfiguration = { ... }
```


### DataAwsccIvsRecordingConfigurationDestinationConfigurationS3 <a name="DataAwsccIvsRecordingConfigurationDestinationConfigurationS3" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIvsRecordingConfigurationDestinationConfigurationS3: dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3 = { ... }
```


### DataAwsccIvsRecordingConfigurationRenditionConfiguration <a name="DataAwsccIvsRecordingConfigurationRenditionConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfiguration.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIvsRecordingConfigurationRenditionConfiguration: dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfiguration = { ... }
```


### DataAwsccIvsRecordingConfigurationTags <a name="DataAwsccIvsRecordingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIvsRecordingConfigurationTags: dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTags = { ... }
```


### DataAwsccIvsRecordingConfigurationThumbnailConfiguration <a name="DataAwsccIvsRecordingConfigurationThumbnailConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIvsRecordingConfigurationThumbnailConfiguration: dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference <a name="DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference">DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfiguration">DataAwsccIvsRecordingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference">DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIvsRecordingConfigurationDestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfiguration">DataAwsccIvsRecordingConfigurationDestinationConfiguration</a>

---


### DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference <a name="DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3">DataAwsccIvsRecordingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIvsRecordingConfigurationDestinationConfigurationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationDestinationConfigurationS3">DataAwsccIvsRecordingConfigurationDestinationConfigurationS3</a>

---


### DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference <a name="DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.renditions">renditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.renditionSelection">renditionSelection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfiguration">DataAwsccIvsRecordingConfigurationRenditionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renditions`<sup>Required</sup> <a name="renditions" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.renditions"></a>

```typescript
public readonly renditions: string[];
```

- *Type:* string[]

---

##### `renditionSelection`<sup>Required</sup> <a name="renditionSelection" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.renditionSelection"></a>

```typescript
public readonly renditionSelection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIvsRecordingConfigurationRenditionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationRenditionConfiguration">DataAwsccIvsRecordingConfigurationRenditionConfiguration</a>

---


### DataAwsccIvsRecordingConfigurationTagsList <a name="DataAwsccIvsRecordingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIvsRecordingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIvsRecordingConfigurationTagsOutputReference <a name="DataAwsccIvsRecordingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTags">DataAwsccIvsRecordingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIvsRecordingConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationTags">DataAwsccIvsRecordingConfigurationTags</a>

---


### DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference <a name="DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIvsRecordingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode">recordingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.resolution">resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.storage">storage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds">targetIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfiguration">DataAwsccIvsRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordingMode`<sup>Required</sup> <a name="recordingMode" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode"></a>

```typescript
public readonly recordingMode: string;
```

- *Type:* string

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.storage"></a>

```typescript
public readonly storage: string[];
```

- *Type:* string[]

---

##### `targetIntervalSeconds`<sup>Required</sup> <a name="targetIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```typescript
public readonly targetIntervalSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIvsRecordingConfigurationThumbnailConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsRecordingConfiguration.DataAwsccIvsRecordingConfigurationThumbnailConfiguration">DataAwsccIvsRecordingConfigurationThumbnailConfiguration</a>

---



