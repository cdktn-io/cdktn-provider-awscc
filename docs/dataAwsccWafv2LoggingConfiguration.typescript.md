# `dataAwsccWafv2LoggingConfiguration` Submodule <a name="`dataAwsccWafv2LoggingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWafv2LoggingConfiguration <a name="DataAwsccWafv2LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wafv2_logging_configuration awscc_wafv2_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration(scope: Construct, id: string, config: DataAwsccWafv2LoggingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig">DataAwsccWafv2LoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig">DataAwsccWafv2LoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWafv2LoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWafv2LoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWafv2LoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.logDestinationConfigs">logDestinationConfigs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.loggingFilter">loggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.managedByFirewallManager">managedByFirewallManager</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList">DataAwsccWafv2LoggingConfigurationRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `logDestinationConfigs`<sup>Required</sup> <a name="logDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.logDestinationConfigs"></a>

```typescript
public readonly logDestinationConfigs: string[];
```

- *Type:* string[]

---

##### `loggingFilter`<sup>Required</sup> <a name="loggingFilter" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.loggingFilter"></a>

```typescript
public readonly loggingFilter: DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference</a>

---

##### `managedByFirewallManager`<sup>Required</sup> <a name="managedByFirewallManager" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.managedByFirewallManager"></a>

```typescript
public readonly managedByFirewallManager: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `redactedFields`<sup>Required</sup> <a name="redactedFields" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.redactedFields"></a>

```typescript
public readonly redactedFields: DataAwsccWafv2LoggingConfigurationRedactedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList">DataAwsccWafv2LoggingConfigurationRedactedFieldsList</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWafv2LoggingConfigurationConfig <a name="DataAwsccWafv2LoggingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationConfig: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wafv2_logging_configuration#id DataAwsccWafv2LoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWafv2LoggingConfigurationLoggingFilter <a name="DataAwsccWafv2LoggingConfigurationLoggingFilter" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationLoggingFilter: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter = { ... }
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFilters <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFilters" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationLoggingFilterFilters: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters = { ... }
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions = { ... }
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition = { ... }
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition = { ... }
```


### DataAwsccWafv2LoggingConfigurationRedactedFields <a name="DataAwsccWafv2LoggingConfigurationRedactedFields" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationRedactedFields: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields = { ... }
```


### DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader: dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">labelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelName`<sup>Required</sup> <a name="labelName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition">actionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">labelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionCondition`<sup>Required</sup> <a name="actionCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```typescript
public readonly actionCondition: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `labelNameCondition`<sup>Required</sup> <a name="labelNameCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```typescript
public readonly labelNameCondition: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement">requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters">DataAwsccWafv2LoggingConfigurationLoggingFilterFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a>

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2LoggingConfigurationLoggingFilterFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters">DataAwsccWafv2LoggingConfigurationLoggingFilterFilters</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior">defaultBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter">DataAwsccWafv2LoggingConfigurationLoggingFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultBehavior`<sup>Required</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.filters"></a>

```typescript
public readonly filters: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2LoggingConfigurationLoggingFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter">DataAwsccWafv2LoggingConfigurationLoggingFilter</a>

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsList <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader">singleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath">uriPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields">DataAwsccWafv2LoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `singleHeader`<sup>Required</sup> <a name="singleHeader" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader"></a>

```typescript
public readonly singleHeader: DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a>

---

##### `uriPath`<sup>Required</sup> <a name="uriPath" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath"></a>

```typescript
public readonly uriPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2LoggingConfigurationRedactedFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields">DataAwsccWafv2LoggingConfigurationRedactedFields</a>

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---



