# `dataAwsccChimeMediaInsightsPipelineConfiguration` Submodule <a name="`dataAwsccChimeMediaInsightsPipelineConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeMediaInsightsPipelineConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration(scope: Construct, id: string, config: DataAwsccChimeMediaInsightsPipelineConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig">DataAwsccChimeMediaInsightsPipelineConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig">DataAwsccChimeMediaInsightsPipelineConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isConstruct"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChimeMediaInsightsPipelineConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChimeMediaInsightsPipelineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeMediaInsightsPipelineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList">DataAwsccChimeMediaInsightsPipelineConfigurationElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn">mediaInsightsPipelineConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId">mediaInsightsPipelineConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration">realTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn">resourceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList">DataAwsccChimeMediaInsightsPipelineConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.elements"></a>

```typescript
public readonly elements: DataAwsccChimeMediaInsightsPipelineConfigurationElementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList">DataAwsccChimeMediaInsightsPipelineConfigurationElementsList</a>

---

##### `mediaInsightsPipelineConfigurationArn`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationArn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationArn: string;
```

- *Type:* string

---

##### `mediaInsightsPipelineConfigurationId`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationId: string;
```

- *Type:* string

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationName: string;
```

- *Type:* string

---

##### `realTimeAlertConfiguration`<sup>Required</sup> <a name="realTimeAlertConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration"></a>

```typescript
public readonly realTimeAlertConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a>

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="resourceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn"></a>

```typescript
public readonly resourceAccessRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccChimeMediaInsightsPipelineConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList">DataAwsccChimeMediaInsightsPipelineConfigurationTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeMediaInsightsPipelineConfigurationConfig <a name="DataAwsccChimeMediaInsightsPipelineConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationConfig: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/chime_media_insights_pipeline_configuration#id DataAwsccChimeMediaInsightsPipelineConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeMediaInsightsPipelineConfigurationElements <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElements" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationElements: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration = { ... }
```


### DataAwsccChimeMediaInsightsPipelineConfigurationTags <a name="DataAwsccChimeMediaInsightsPipelineConfigurationTags" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaInsightsPipelineConfigurationTags: dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories">callAnalyticsStreamCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType">contentIdentificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType">contentRedactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults">filterPartialResults</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName">languageModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability">partialResultsStability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings">postCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callAnalyticsStreamCategories`<sup>Required</sup> <a name="callAnalyticsStreamCategories" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories"></a>

```typescript
public readonly callAnalyticsStreamCategories: string[];
```

- *Type:* string[]

---

##### `contentIdentificationType`<sup>Required</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: string;
```

- *Type:* string

---

##### `contentRedactionType`<sup>Required</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: string;
```

- *Type:* string

---

##### `enablePartialResultsStabilization`<sup>Required</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `filterPartialResults`<sup>Required</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `languageModelName`<sup>Required</sup> <a name="languageModelName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

---

##### `partialResultsStability`<sup>Required</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: string;
```

- *Type:* string

---

##### `piiEntityTypes`<sup>Required</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

---

##### `postCallAnalyticsSettings`<sup>Required</sup> <a name="postCallAnalyticsSettings" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings"></a>

```typescript
public readonly postCallAnalyticsSettings: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a>

---

##### `vocabularyFilterMethod`<sup>Required</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: string;
```

- *Type:* string

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput">contentRedactionOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId">outputEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation">outputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentRedactionOutput`<sup>Required</sup> <a name="contentRedactionOutput" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput"></a>

```typescript
public readonly contentRedactionOutput: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `outputEncryptionKmsKeyId`<sup>Required</sup> <a name="outputEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId"></a>

```typescript
public readonly outputEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType">contentIdentificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType">contentRedactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults">filterPartialResults</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage">identifyLanguage</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages">identifyMultipleLanguages</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName">languageModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions">languageOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability">partialResultsStability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel">showSpeakerLabel</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames">vocabularyFilterNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames">vocabularyNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentIdentificationType`<sup>Required</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: string;
```

- *Type:* string

---

##### `contentRedactionType`<sup>Required</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: string;
```

- *Type:* string

---

##### `enablePartialResultsStabilization`<sup>Required</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `filterPartialResults`<sup>Required</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `identifyLanguage`<sup>Required</sup> <a name="identifyLanguage" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage"></a>

```typescript
public readonly identifyLanguage: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `identifyMultipleLanguages`<sup>Required</sup> <a name="identifyMultipleLanguages" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages"></a>

```typescript
public readonly identifyMultipleLanguages: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `languageModelName`<sup>Required</sup> <a name="languageModelName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

---

##### `languageOptions`<sup>Required</sup> <a name="languageOptions" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions"></a>

```typescript
public readonly languageOptions: string;
```

- *Type:* string

---

##### `partialResultsStability`<sup>Required</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: string;
```

- *Type:* string

---

##### `piiEntityTypes`<sup>Required</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `showSpeakerLabel`<sup>Required</sup> <a name="showSpeakerLabel" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel"></a>

```typescript
public readonly showSpeakerLabel: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vocabularyFilterMethod`<sup>Required</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: string;
```

- *Type:* string

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `vocabularyFilterNames`<sup>Required</sup> <a name="vocabularyFilterNames" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames"></a>

```typescript
public readonly vocabularyFilterNames: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

##### `vocabularyNames`<sup>Required</sup> <a name="vocabularyNames" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames"></a>

```typescript
public readonly vocabularyNames: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget">insightsTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insightsTarget`<sup>Required</sup> <a name="insightsTarget" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsList <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsList" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.get"></a>

```typescript
public get(index: number): DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration">amazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration">kinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration">s3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements">DataAwsccChimeMediaInsightsPipelineConfigurationElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Required</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeCallAnalyticsProcessorConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a>

---

##### `amazonTranscribeProcessorConfiguration`<sup>Required</sup> <a name="amazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeProcessorConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a>

---

##### `kinesisDataStreamSinkConfiguration`<sup>Required</sup> <a name="kinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration"></a>

```typescript
public readonly kinesisDataStreamSinkConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a>

---

##### `s3RecordingSinkConfiguration`<sup>Required</sup> <a name="s3RecordingSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration"></a>

```typescript
public readonly s3RecordingSinkConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationElements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements">DataAwsccChimeMediaInsightsPipelineConfigurationElements</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat">recordingFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `recordingFileFormat`<sup>Required</sup> <a name="recordingFileFormat" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat"></a>

```typescript
public readonly recordingFileFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords">keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate">negate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate"></a>

```typescript
public readonly negate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get"></a>

```typescript
public get(index: number): DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration">issueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration">keywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration">sentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issueDetectionConfiguration`<sup>Required</sup> <a name="issueDetectionConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration"></a>

```typescript
public readonly issueDetectionConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a>

---

##### `keywordMatchConfiguration`<sup>Required</sup> <a name="keywordMatchConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration"></a>

```typescript
public readonly keywordMatchConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a>

---

##### `sentimentConfiguration`<sup>Required</sup> <a name="sentimentConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration"></a>

```typescript
public readonly sentimentConfiguration: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType">sentimentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod">timePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `sentimentType`<sup>Required</sup> <a name="sentimentType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType"></a>

```typescript
public readonly sentimentType: string;
```

- *Type:* string

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod"></a>

```typescript
public readonly timePeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationTagsList <a name="DataAwsccChimeMediaInsightsPipelineConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaInsightsPipelineConfiguration } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags">DataAwsccChimeMediaInsightsPipelineConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaInsightsPipelineConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags">DataAwsccChimeMediaInsightsPipelineConfigurationTags</a>

---



