# `dataAwsccIotwirelessNetworkAnalyzerConfiguration` Submodule <a name="`dataAwsccIotwirelessNetworkAnalyzerConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfiguration <a name="DataAwsccIotwirelessNetworkAnalyzerConfiguration" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration(scope: Construct, id: string, config: DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig">DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig">DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotwirelessNetworkAnalyzerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList">DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.traceContent">traceContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices">wirelessDevices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways">wirelessGateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList">DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList</a>

---

##### `traceContent`<sup>Required</sup> <a name="traceContent" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.traceContent"></a>

```typescript
public readonly traceContent: DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a>

---

##### `wirelessDevices`<sup>Required</sup> <a name="wirelessDevices" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices"></a>

```typescript
public readonly wirelessDevices: string[];
```

- *Type:* string[]

---

##### `wirelessGateways`<sup>Required</sup> <a name="wirelessGateways" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways"></a>

```typescript
public readonly wirelessGateways: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessNetworkAnalyzerConfigurationConfig: dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_network_analyzer_configuration#id DataAwsccIotwirelessNetworkAnalyzerConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessNetworkAnalyzerConfigurationTags <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessNetworkAnalyzerConfigurationTags: dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags = { ... }
```


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent.Initializer"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent: dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags">DataAwsccIotwirelessNetworkAnalyzerConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessNetworkAnalyzerConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags">DataAwsccIotwirelessNetworkAnalyzerConfigurationTags</a>

---


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessNetworkAnalyzerConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo">wirelessDeviceFrameInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `wirelessDeviceFrameInfo`<sup>Required</sup> <a name="wirelessDeviceFrameInfo" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo"></a>

```typescript
public readonly wirelessDeviceFrameInfo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---



