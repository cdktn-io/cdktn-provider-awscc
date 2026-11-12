# `dataAwsccMedialiveInput` Submodule <a name="`dataAwsccMedialiveInput` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveInput <a name="DataAwsccMedialiveInput" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input awscc_medialive_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInput(scope: Construct, id: string, config: DataAwsccMedialiveInputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig">DataAwsccMedialiveInputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig">DataAwsccMedialiveInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveInput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isConstruct"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

dataAwsccMedialiveInput.DataAwsccMedialiveInput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformElement"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformDataSource"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMedialiveInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.attachedChannels">attachedChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList">DataAwsccMedialiveInputDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinationUrls">destinationUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputClass">inputClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputDevices">inputDevices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList">DataAwsccMedialiveInputInputDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputId">inputId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputNetworkLocation">inputNetworkLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputPartnerIds">inputPartnerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSecurityGroups">inputSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSourceType">inputSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.mediaConnectFlows">mediaConnectFlows</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList">DataAwsccMedialiveInputMediaConnectFlowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.multicastSettings">multicastSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference">DataAwsccMedialiveInputMulticastSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.routerSettings">routerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference">DataAwsccMedialiveInputRouterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sdiSources">sdiSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.smpte2110ReceiverGroupSettings">smpte2110ReceiverGroupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList">DataAwsccMedialiveInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sourceUrls">sourceUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.srtSettings">srtSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference">DataAwsccMedialiveInputVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attachedChannels`<sup>Required</sup> <a name="attachedChannels" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.attachedChannels"></a>

```typescript
public readonly attachedChannels: string[];
```

- *Type:* string[]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccMedialiveInputDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList">DataAwsccMedialiveInputDestinationsList</a>

---

##### `destinationUrls`<sup>Required</sup> <a name="destinationUrls" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinationUrls"></a>

```typescript
public readonly destinationUrls: string[];
```

- *Type:* string[]

---

##### `inputClass`<sup>Required</sup> <a name="inputClass" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputClass"></a>

```typescript
public readonly inputClass: string;
```

- *Type:* string

---

##### `inputDevices`<sup>Required</sup> <a name="inputDevices" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputDevices"></a>

```typescript
public readonly inputDevices: DataAwsccMedialiveInputInputDevicesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList">DataAwsccMedialiveInputInputDevicesList</a>

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputId"></a>

```typescript
public readonly inputId: string;
```

- *Type:* string

---

##### `inputNetworkLocation`<sup>Required</sup> <a name="inputNetworkLocation" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputNetworkLocation"></a>

```typescript
public readonly inputNetworkLocation: string;
```

- *Type:* string

---

##### `inputPartnerIds`<sup>Required</sup> <a name="inputPartnerIds" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputPartnerIds"></a>

```typescript
public readonly inputPartnerIds: string[];
```

- *Type:* string[]

---

##### `inputSecurityGroups`<sup>Required</sup> <a name="inputSecurityGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSecurityGroups"></a>

```typescript
public readonly inputSecurityGroups: string[];
```

- *Type:* string[]

---

##### `inputSourceType`<sup>Required</sup> <a name="inputSourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSourceType"></a>

```typescript
public readonly inputSourceType: string;
```

- *Type:* string

---

##### `mediaConnectFlows`<sup>Required</sup> <a name="mediaConnectFlows" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.mediaConnectFlows"></a>

```typescript
public readonly mediaConnectFlows: DataAwsccMedialiveInputMediaConnectFlowsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList">DataAwsccMedialiveInputMediaConnectFlowsList</a>

---

##### `multicastSettings`<sup>Required</sup> <a name="multicastSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.multicastSettings"></a>

```typescript
public readonly multicastSettings: DataAwsccMedialiveInputMulticastSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference">DataAwsccMedialiveInputMulticastSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `routerSettings`<sup>Required</sup> <a name="routerSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.routerSettings"></a>

```typescript
public readonly routerSettings: DataAwsccMedialiveInputRouterSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference">DataAwsccMedialiveInputRouterSettingsOutputReference</a>

---

##### `sdiSources`<sup>Required</sup> <a name="sdiSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sdiSources"></a>

```typescript
public readonly sdiSources: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `smpte2110ReceiverGroupSettings`<sup>Required</sup> <a name="smpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.smpte2110ReceiverGroupSettings"></a>

```typescript
public readonly smpte2110ReceiverGroupSettings: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sources"></a>

```typescript
public readonly sources: DataAwsccMedialiveInputSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList">DataAwsccMedialiveInputSourcesList</a>

---

##### `sourceUrls`<sup>Required</sup> <a name="sourceUrls" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sourceUrls"></a>

```typescript
public readonly sourceUrls: string[];
```

- *Type:* string[]

---

##### `srtSettings`<sup>Required</sup> <a name="srtSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.srtSettings"></a>

```typescript
public readonly srtSettings: DataAwsccMedialiveInputSrtSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.vpc"></a>

```typescript
public readonly vpc: DataAwsccMedialiveInputVpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference">DataAwsccMedialiveInputVpcOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveInputConfig <a name="DataAwsccMedialiveInputConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputConfig: dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input#id DataAwsccMedialiveInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveInputDestinations <a name="DataAwsccMedialiveInputDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputDestinations: dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations = { ... }
```


### DataAwsccMedialiveInputDestinationsNetworkRoutes <a name="DataAwsccMedialiveInputDestinationsNetworkRoutes" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputDestinationsNetworkRoutes: dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes = { ... }
```


### DataAwsccMedialiveInputDestinationsVpc <a name="DataAwsccMedialiveInputDestinationsVpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputDestinationsVpc: dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc = { ... }
```


### DataAwsccMedialiveInputInputDevices <a name="DataAwsccMedialiveInputInputDevices" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputInputDevices: dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices = { ... }
```


### DataAwsccMedialiveInputMediaConnectFlows <a name="DataAwsccMedialiveInputMediaConnectFlows" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputMediaConnectFlows: dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows = { ... }
```


### DataAwsccMedialiveInputMulticastSettings <a name="DataAwsccMedialiveInputMulticastSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputMulticastSettings: dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings = { ... }
```


### DataAwsccMedialiveInputMulticastSettingsSources <a name="DataAwsccMedialiveInputMulticastSettingsSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputMulticastSettingsSources: dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources = { ... }
```


### DataAwsccMedialiveInputRouterSettings <a name="DataAwsccMedialiveInputRouterSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputRouterSettings: dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings = { ... }
```


### DataAwsccMedialiveInputRouterSettingsDestinations <a name="DataAwsccMedialiveInputRouterSettingsDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputRouterSettingsDestinations: dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations = { ... }
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSmpte2110ReceiverGroupSettings: dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings = { ... }
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups: dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups = { ... }
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings: dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings = { ... }
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps: dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps = { ... }
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps: dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps = { ... }
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp: dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp = { ... }
```


### DataAwsccMedialiveInputSources <a name="DataAwsccMedialiveInputSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSources: dataAwsccMedialiveInput.DataAwsccMedialiveInputSources = { ... }
```


### DataAwsccMedialiveInputSrtSettings <a name="DataAwsccMedialiveInputSrtSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSrtSettings: dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings = { ... }
```


### DataAwsccMedialiveInputSrtSettingsSrtCallerSources <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSrtSettingsSrtCallerSources: dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources = { ... }
```


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption: dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption = { ... }
```


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettings <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSrtSettingsSrtListenerSettings: dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings = { ... }
```


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption: dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption = { ... }
```


### DataAwsccMedialiveInputVpc <a name="DataAwsccMedialiveInputVpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

const dataAwsccMedialiveInputVpc: dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveInputDestinationsList <a name="DataAwsccMedialiveInputDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputDestinationsNetworkRoutesList <a name="DataAwsccMedialiveInputDestinationsNetworkRoutesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference <a name="DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes">DataAwsccMedialiveInputDestinationsNetworkRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputDestinationsNetworkRoutes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes">DataAwsccMedialiveInputDestinationsNetworkRoutes</a>

---


### DataAwsccMedialiveInputDestinationsOutputReference <a name="DataAwsccMedialiveInputDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.networkRoutes">networkRoutes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList">DataAwsccMedialiveInputDestinationsNetworkRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.staticIpAddress">staticIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference">DataAwsccMedialiveInputDestinationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations">DataAwsccMedialiveInputDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkRoutes`<sup>Required</sup> <a name="networkRoutes" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.networkRoutes"></a>

```typescript
public readonly networkRoutes: DataAwsccMedialiveInputDestinationsNetworkRoutesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList">DataAwsccMedialiveInputDestinationsNetworkRoutesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `staticIpAddress`<sup>Required</sup> <a name="staticIpAddress" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.staticIpAddress"></a>

```typescript
public readonly staticIpAddress: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.vpc"></a>

```typescript
public readonly vpc: DataAwsccMedialiveInputDestinationsVpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference">DataAwsccMedialiveInputDestinationsVpcOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations">DataAwsccMedialiveInputDestinations</a>

---


### DataAwsccMedialiveInputDestinationsVpcOutputReference <a name="DataAwsccMedialiveInputDestinationsVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc">DataAwsccMedialiveInputDestinationsVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputDestinationsVpc;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc">DataAwsccMedialiveInputDestinationsVpc</a>

---


### DataAwsccMedialiveInputInputDevicesList <a name="DataAwsccMedialiveInputInputDevicesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputInputDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputInputDevicesOutputReference <a name="DataAwsccMedialiveInputInputDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices">DataAwsccMedialiveInputInputDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputInputDevices;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices">DataAwsccMedialiveInputInputDevices</a>

---


### DataAwsccMedialiveInputMediaConnectFlowsList <a name="DataAwsccMedialiveInputMediaConnectFlowsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputMediaConnectFlowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputMediaConnectFlowsOutputReference <a name="DataAwsccMedialiveInputMediaConnectFlowsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows">DataAwsccMedialiveInputMediaConnectFlows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputMediaConnectFlows;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows">DataAwsccMedialiveInputMediaConnectFlows</a>

---


### DataAwsccMedialiveInputMulticastSettingsOutputReference <a name="DataAwsccMedialiveInputMulticastSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList">DataAwsccMedialiveInputMulticastSettingsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings">DataAwsccMedialiveInputMulticastSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.sources"></a>

```typescript
public readonly sources: DataAwsccMedialiveInputMulticastSettingsSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList">DataAwsccMedialiveInputMulticastSettingsSourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputMulticastSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings">DataAwsccMedialiveInputMulticastSettings</a>

---


### DataAwsccMedialiveInputMulticastSettingsSourcesList <a name="DataAwsccMedialiveInputMulticastSettingsSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference <a name="DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources">DataAwsccMedialiveInputMulticastSettingsSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputMulticastSettingsSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources">DataAwsccMedialiveInputMulticastSettingsSources</a>

---


### DataAwsccMedialiveInputRouterSettingsDestinationsList <a name="DataAwsccMedialiveInputRouterSettingsDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference <a name="DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn">routerOutputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations">DataAwsccMedialiveInputRouterSettingsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `routerOutputArn`<sup>Required</sup> <a name="routerOutputArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn"></a>

```typescript
public readonly routerOutputArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputRouterSettingsDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations">DataAwsccMedialiveInputRouterSettingsDestinations</a>

---


### DataAwsccMedialiveInputRouterSettingsOutputReference <a name="DataAwsccMedialiveInputRouterSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList">DataAwsccMedialiveInputRouterSettingsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings">DataAwsccMedialiveInputRouterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccMedialiveInputRouterSettingsDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList">DataAwsccMedialiveInputRouterSettingsDestinationsList</a>

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputRouterSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings">DataAwsccMedialiveInputRouterSettings</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups">smpte2110ReceiverGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `smpte2110ReceiverGroups`<sup>Required</sup> <a name="smpte2110ReceiverGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups"></a>

```typescript
public readonly smpte2110ReceiverGroups: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sdpSettings`<sup>Required</sup> <a name="sdpSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings"></a>

```typescript
public readonly sdpSettings: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex">mediaIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl">sdpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediaIndex`<sup>Required</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex"></a>

```typescript
public readonly mediaIndex: number;
```

- *Type:* number

---

##### `sdpUrl`<sup>Required</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl"></a>

```typescript
public readonly sdpUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex">mediaIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl">sdpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediaIndex`<sup>Required</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex"></a>

```typescript
public readonly mediaIndex: number;
```

- *Type:* number

---

##### `sdpUrl`<sup>Required</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl"></a>

```typescript
public readonly sdpUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps">ancillarySdps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps">audioSdps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp">videoSdp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ancillarySdps`<sup>Required</sup> <a name="ancillarySdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps"></a>

```typescript
public readonly ancillarySdps: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a>

---

##### `audioSdps`<sup>Required</sup> <a name="audioSdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps"></a>

```typescript
public readonly audioSdps: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a>

---

##### `videoSdp`<sup>Required</sup> <a name="videoSdp" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp"></a>

```typescript
public readonly videoSdp: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex">mediaIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl">sdpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediaIndex`<sup>Required</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex"></a>

```typescript
public readonly mediaIndex: number;
```

- *Type:* number

---

##### `sdpUrl`<sup>Required</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl"></a>

```typescript
public readonly sdpUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---


### DataAwsccMedialiveInputSourcesList <a name="DataAwsccMedialiveInputSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputSourcesOutputReference <a name="DataAwsccMedialiveInputSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.passwordParam">passwordParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources">DataAwsccMedialiveInputSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordParam`<sup>Required</sup> <a name="passwordParam" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.passwordParam"></a>

```typescript
public readonly passwordParam: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources">DataAwsccMedialiveInputSources</a>

---


### DataAwsccMedialiveInputSrtSettingsOutputReference <a name="DataAwsccMedialiveInputSrtSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtCallerSources">srtCallerSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtListenerSettings">srtListenerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings">DataAwsccMedialiveInputSrtSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `srtCallerSources`<sup>Required</sup> <a name="srtCallerSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtCallerSources"></a>

```typescript
public readonly srtCallerSources: DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList</a>

---

##### `srtListenerSettings`<sup>Required</sup> <a name="srtListenerSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtListenerSettings"></a>

```typescript
public readonly srtListenerSettings: DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSrtSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings">DataAwsccMedialiveInputSrtSettings</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn">passphraseSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `passphraseSecretArn`<sup>Required</sup> <a name="passphraseSecretArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn"></a>

```typescript
public readonly passphraseSecretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency">minimumLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress">srtListenerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort">srtListenerPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources">DataAwsccMedialiveInputSrtSettingsSrtCallerSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption"></a>

```typescript
public readonly decryption: DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a>

---

##### `minimumLatency`<sup>Required</sup> <a name="minimumLatency" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency"></a>

```typescript
public readonly minimumLatency: number;
```

- *Type:* number

---

##### `srtListenerAddress`<sup>Required</sup> <a name="srtListenerAddress" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress"></a>

```typescript
public readonly srtListenerAddress: string;
```

- *Type:* string

---

##### `srtListenerPort`<sup>Required</sup> <a name="srtListenerPort" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort"></a>

```typescript
public readonly srtListenerPort: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSrtSettingsSrtCallerSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources">DataAwsccMedialiveInputSrtSettingsSrtCallerSources</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn">passphraseSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `passphraseSecretArn`<sup>Required</sup> <a name="passphraseSecretArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn"></a>

```typescript
public readonly passphraseSecretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency">minimumLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings">DataAwsccMedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption"></a>

```typescript
public readonly decryption: DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a>

---

##### `minimumLatency`<sup>Required</sup> <a name="minimumLatency" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency"></a>

```typescript
public readonly minimumLatency: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputSrtSettingsSrtListenerSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings">DataAwsccMedialiveInputSrtSettingsSrtListenerSettings</a>

---


### DataAwsccMedialiveInputVpcOutputReference <a name="DataAwsccMedialiveInputVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveInput } from '@cdktn/provider-awscc'

new dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc">DataAwsccMedialiveInputVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveInputVpc;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc">DataAwsccMedialiveInputVpc</a>

---



