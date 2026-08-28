# `dataAwsccCodepipelineCustomActionType` Submodule <a name="`dataAwsccCodepipelineCustomActionType` Submodule" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodepipelineCustomActionType <a name="DataAwsccCodepipelineCustomActionType" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType(scope: Construct, id: string, config: DataAwsccCodepipelineCustomActionTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig">DataAwsccCodepipelineCustomActionTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig">DataAwsccCodepipelineCustomActionTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodepipelineCustomActionType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isConstruct"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformElement"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformDataSource"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCodepipelineCustomActionType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodepipelineCustomActionType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodepipelineCustomActionType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodepipelineCustomActionType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.configurationProperties">configurationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList">DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.customActionTypeId">customActionTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.inputArtifactDetails">inputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.outputArtifactDetails">outputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference">DataAwsccCodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList">DataAwsccCodepipelineCustomActionTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `configurationProperties`<sup>Required</sup> <a name="configurationProperties" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.configurationProperties"></a>

```typescript
public readonly configurationProperties: DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList">DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList</a>

---

##### `customActionTypeId`<sup>Required</sup> <a name="customActionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.customActionTypeId"></a>

```typescript
public readonly customActionTypeId: string;
```

- *Type:* string

---

##### `inputArtifactDetails`<sup>Required</sup> <a name="inputArtifactDetails" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.inputArtifactDetails"></a>

```typescript
public readonly inputArtifactDetails: DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `outputArtifactDetails`<sup>Required</sup> <a name="outputArtifactDetails" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.outputArtifactDetails"></a>

```typescript
public readonly outputArtifactDetails: DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.settings"></a>

```typescript
public readonly settings: DataAwsccCodepipelineCustomActionTypeSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference">DataAwsccCodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tags"></a>

```typescript
public readonly tags: DataAwsccCodepipelineCustomActionTypeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList">DataAwsccCodepipelineCustomActionTypeTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodepipelineCustomActionTypeConfig <a name="DataAwsccCodepipelineCustomActionTypeConfig" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

const dataAwsccCodepipelineCustomActionTypeConfig: dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_custom_action_type#id DataAwsccCodepipelineCustomActionType#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodepipelineCustomActionTypeConfigurationProperties <a name="DataAwsccCodepipelineCustomActionTypeConfigurationProperties" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

const dataAwsccCodepipelineCustomActionTypeConfigurationProperties: dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties = { ... }
```


### DataAwsccCodepipelineCustomActionTypeInputArtifactDetails <a name="DataAwsccCodepipelineCustomActionTypeInputArtifactDetails" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

const dataAwsccCodepipelineCustomActionTypeInputArtifactDetails: dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails = { ... }
```


### DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails <a name="DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

const dataAwsccCodepipelineCustomActionTypeOutputArtifactDetails: dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails = { ... }
```


### DataAwsccCodepipelineCustomActionTypeSettings <a name="DataAwsccCodepipelineCustomActionTypeSettings" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

const dataAwsccCodepipelineCustomActionTypeSettings: dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings = { ... }
```


### DataAwsccCodepipelineCustomActionTypeTags <a name="DataAwsccCodepipelineCustomActionTypeTags" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

const dataAwsccCodepipelineCustomActionTypeTags: dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList <a name="DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference <a name="DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key">key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable">queryable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret">secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties">DataAwsccCodepipelineCustomActionTypeConfigurationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key"></a>

```typescript
public readonly key: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryable`<sup>Required</sup> <a name="queryable" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable"></a>

```typescript
public readonly queryable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret"></a>

```typescript
public readonly secret: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelineCustomActionTypeConfigurationProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties">DataAwsccCodepipelineCustomActionTypeConfigurationProperties</a>

---


### DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">maximumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">minimumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails">DataAwsccCodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumCount`<sup>Required</sup> <a name="maximumCount" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```typescript
public readonly maximumCount: number;
```

- *Type:* number

---

##### `minimumCount`<sup>Required</sup> <a name="minimumCount" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```typescript
public readonly minimumCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelineCustomActionTypeInputArtifactDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails">DataAwsccCodepipelineCustomActionTypeInputArtifactDetails</a>

---


### DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">maximumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">minimumCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumCount`<sup>Required</sup> <a name="maximumCount" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```typescript
public readonly maximumCount: number;
```

- *Type:* number

---

##### `minimumCount`<sup>Required</sup> <a name="minimumCount" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```typescript
public readonly minimumCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails</a>

---


### DataAwsccCodepipelineCustomActionTypeSettingsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">entityUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">executionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">revisionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">thirdPartyConfigurationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings">DataAwsccCodepipelineCustomActionTypeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityUrlTemplate`<sup>Required</sup> <a name="entityUrlTemplate" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```typescript
public readonly entityUrlTemplate: string;
```

- *Type:* string

---

##### `executionUrlTemplate`<sup>Required</sup> <a name="executionUrlTemplate" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```typescript
public readonly executionUrlTemplate: string;
```

- *Type:* string

---

##### `revisionUrlTemplate`<sup>Required</sup> <a name="revisionUrlTemplate" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```typescript
public readonly revisionUrlTemplate: string;
```

- *Type:* string

---

##### `thirdPartyConfigurationUrl`<sup>Required</sup> <a name="thirdPartyConfigurationUrl" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```typescript
public readonly thirdPartyConfigurationUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelineCustomActionTypeSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings">DataAwsccCodepipelineCustomActionTypeSettings</a>

---


### DataAwsccCodepipelineCustomActionTypeTagsList <a name="DataAwsccCodepipelineCustomActionTypeTagsList" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelineCustomActionTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelineCustomActionTypeTagsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelineCustomActionType } from '@cdktn/provider-awscc'

new dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags">DataAwsccCodepipelineCustomActionTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelineCustomActionTypeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags">DataAwsccCodepipelineCustomActionTypeTags</a>

---



