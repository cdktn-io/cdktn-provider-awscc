# `dataAwsccNetworkfirewallLoggingConfiguration` Submodule <a name="`dataAwsccNetworkfirewallLoggingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallLoggingConfiguration <a name="DataAwsccNetworkfirewallLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration(scope: Construct, id: string, config: DataAwsccNetworkfirewallLoggingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig">DataAwsccNetworkfirewallLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig">DataAwsccNetworkfirewallLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkfirewallLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkfirewallLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard">enableMonitoringDashboard</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallName">firewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `enableMonitoringDashboard`<sup>Required</sup> <a name="enableMonitoringDashboard" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard"></a>

```typescript
public readonly enableMonitoringDashboard: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallLoggingConfigurationConfig <a name="DataAwsccNetworkfirewallLoggingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallLoggingConfigurationConfig: dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkfirewall_logging_configuration#id DataAwsccNetworkfirewallLoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration: dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration = { ... }
```


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs: dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination">logDestination</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination"></a>

```typescript
public readonly logDestination: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs</a>

---


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallLoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs">logDestinationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logDestinationConfigs`<sup>Required</sup> <a name="logDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs"></a>

```typescript
public readonly logDestinationConfigs: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration</a>

---



