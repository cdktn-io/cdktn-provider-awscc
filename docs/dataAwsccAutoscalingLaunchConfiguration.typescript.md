# `dataAwsccAutoscalingLaunchConfiguration` Submodule <a name="`dataAwsccAutoscalingLaunchConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingLaunchConfiguration <a name="DataAwsccAutoscalingLaunchConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration(scope: Construct, id: string, config: DataAwsccAutoscalingLaunchConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig">DataAwsccAutoscalingLaunchConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig">DataAwsccAutoscalingLaunchConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isConstruct"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAutoscalingLaunchConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAutoscalingLaunchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_launch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingLaunchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcId">classicLinkVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups">classicLinkVpcSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ebsOptimized">ebsOptimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceMonitoring">instanceMonitoring</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.launchConfigurationName">launchConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference">DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.placementTenancy">placementTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.spotPrice">spotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList</a>

---

##### `classicLinkVpcId`<sup>Required</sup> <a name="classicLinkVpcId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcId"></a>

```typescript
public readonly classicLinkVpcId: string;
```

- *Type:* string

---

##### `classicLinkVpcSecurityGroups`<sup>Required</sup> <a name="classicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups"></a>

```typescript
public readonly classicLinkVpcSecurityGroups: string[];
```

- *Type:* string[]

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceMonitoring`<sup>Required</sup> <a name="instanceMonitoring" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceMonitoring"></a>

```typescript
public readonly instanceMonitoring: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `launchConfigurationName`<sup>Required</sup> <a name="launchConfigurationName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.launchConfigurationName"></a>

```typescript
public readonly launchConfigurationName: string;
```

- *Type:* string

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference">DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `placementTenancy`<sup>Required</sup> <a name="placementTenancy" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.placementTenancy"></a>

```typescript
public readonly placementTenancy: string;
```

- *Type:* string

---

##### `ramDiskId`<sup>Required</sup> <a name="ramDiskId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings: dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings = { ... }
```


### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs: dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs = { ... }
```


### DataAwsccAutoscalingLaunchConfigurationConfig <a name="DataAwsccAutoscalingLaunchConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingLaunchConfigurationConfig: dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_launch_configuration#id DataAwsccAutoscalingLaunchConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingLaunchConfigurationMetadataOptions <a name="DataAwsccAutoscalingLaunchConfigurationMetadataOptions" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAutoscalingLaunchConfigurationMetadataOptions: dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---


### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings</a>

---


### DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference <a name="DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAutoscalingLaunchConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions">DataAwsccAutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAutoscalingLaunchConfigurationMetadataOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions">DataAwsccAutoscalingLaunchConfigurationMetadataOptions</a>

---



