# `dataAwsccGameliftMatchmakingConfiguration` Submodule <a name="`dataAwsccGameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftMatchmakingConfiguration <a name="DataAwsccGameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration(scope: Construct, id: string, config: DataAwsccGameliftMatchmakingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig">DataAwsccGameliftMatchmakingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig">DataAwsccGameliftMatchmakingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGameliftMatchmakingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceRequired">acceptanceRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">acceptanceTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.additionalPlayerCount">additionalPlayerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.backfillMode">backfillMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.customEventData">customEventData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.flexMatchMode">flexMatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameProperties">gameProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList">DataAwsccGameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionData">gameSessionData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionQueueArns">gameSessionQueueArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.notificationTarget">notificationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.requestTimeoutSeconds">requestTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetArn">ruleSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList">DataAwsccGameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```typescript
public readonly acceptanceRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `acceptanceTimeoutSeconds`<sup>Required</sup> <a name="acceptanceTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```typescript
public readonly acceptanceTimeoutSeconds: number;
```

- *Type:* number

---

##### `additionalPlayerCount`<sup>Required</sup> <a name="additionalPlayerCount" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```typescript
public readonly additionalPlayerCount: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `backfillMode`<sup>Required</sup> <a name="backfillMode" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.backfillMode"></a>

```typescript
public readonly backfillMode: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `customEventData`<sup>Required</sup> <a name="customEventData" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.customEventData"></a>

```typescript
public readonly customEventData: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `flexMatchMode`<sup>Required</sup> <a name="flexMatchMode" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```typescript
public readonly flexMatchMode: string;
```

- *Type:* string

---

##### `gameProperties`<sup>Required</sup> <a name="gameProperties" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameProperties"></a>

```typescript
public readonly gameProperties: DataAwsccGameliftMatchmakingConfigurationGamePropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList">DataAwsccGameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `gameSessionData`<sup>Required</sup> <a name="gameSessionData" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionData"></a>

```typescript
public readonly gameSessionData: string;
```

- *Type:* string

---

##### `gameSessionQueueArns`<sup>Required</sup> <a name="gameSessionQueueArns" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```typescript
public readonly gameSessionQueueArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: string;
```

- *Type:* string

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="requestTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```typescript
public readonly requestTimeoutSeconds: number;
```

- *Type:* number

---

##### `ruleSetArn`<sup>Required</sup> <a name="ruleSetArn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```typescript
public readonly ruleSetArn: string;
```

- *Type:* string

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccGameliftMatchmakingConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList">DataAwsccGameliftMatchmakingConfigurationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftMatchmakingConfigurationConfig <a name="DataAwsccGameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccGameliftMatchmakingConfigurationConfig: dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_matchmaking_configuration#id DataAwsccGameliftMatchmakingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftMatchmakingConfigurationGameProperties <a name="DataAwsccGameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccGameliftMatchmakingConfigurationGameProperties: dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties = { ... }
```


### DataAwsccGameliftMatchmakingConfigurationTags <a name="DataAwsccGameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccGameliftMatchmakingConfigurationTags: dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftMatchmakingConfigurationGamePropertiesList <a name="DataAwsccGameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties">DataAwsccGameliftMatchmakingConfigurationGameProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftMatchmakingConfigurationGameProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties">DataAwsccGameliftMatchmakingConfigurationGameProperties</a>

---


### DataAwsccGameliftMatchmakingConfigurationTagsList <a name="DataAwsccGameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccGameliftMatchmakingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGameliftMatchmakingConfigurationTagsOutputReference <a name="DataAwsccGameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags">DataAwsccGameliftMatchmakingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftMatchmakingConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags">DataAwsccGameliftMatchmakingConfigurationTags</a>

---



